import { useState, useEffect, useCallback } from 'react'
import { useStore } from '@/store/store'
import { useDropzone } from 'react-dropzone'

export const useFileUpload = () => {
  const addFile = useStore(state => state.addFile)
  const [courseworkType, setCourseworkType] = useState('')
  const [subject, setSubject] = useState('')
  const [title, setTitle] = useState('')
  const [fileData, setFileData] = useState(null)
  const [isDragActive, setIsDragActive] = useState(false)

  const countWords = text => {
    const words = text.trim().split(/\s+/)
    return words.length
  }

  const onDrop = useCallback(acceptedFiles => {
    setIsDragActive(false)
    acceptedFiles.forEach(file => {
      if (file.size > 25 * 1024 * 1024) {
        alert(`File size exceeds the limit of 25 MB: ${file.name}`)
        return
      }

      const reader = new FileReader()
      reader.onload = () => {
        const text = reader.result
        const wordCount = countWords(text)
        setFileData({
          name: file.name,
          size: file.size,
          content: text,
          wordCount: wordCount
        })
      }

      reader.readAsText(file)
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false)
  })

  const handleSubmit = () => {
    if (!fileData || !courseworkType || !subject || !title) {
      alert('Please fill in all fields and upload a file.')
      return
    }

    const completeFileData = {
      ...fileData,
      courseworkDetails: {
        courseworkType,
        subject,
        title
      }
    }

    addFile(completeFileData)
    saveFileToLocalStorage(completeFileData)
    resetForm()
  }

  const saveFileToLocalStorage = fileData => {
    try {
      let storedFiles = JSON.parse(localStorage.getItem('files')) || []
      storedFiles.push(fileData)
      localStorage.setItem('files', JSON.stringify(storedFiles))
    } catch (e) {
      console.error('Error saving to localStorage', e)
    }
  }

  useEffect(() => {
    try {
      const storedFiles = JSON.parse(localStorage.getItem('files')) || []
      storedFiles.forEach(addFile)
    } catch (e) {
      console.error('Error loading from localStorage', e)
    }
  }, [addFile])

  const resetForm = () => {
    setCourseworkType('')
    setSubject('')
    setTitle('')
    setFileData(null)
  }

  return {
    courseworkType,
    setCourseworkType,
    subject,
    setSubject,
    title,
    setTitle,
    getRootProps,
    getInputProps,
    fileData,
    setFileData,
    isDragActive,
    onDrop,
    handleSubmit
  }
}
