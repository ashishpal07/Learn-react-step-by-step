import { useState, useEffect, useCallback } from 'react'
import { useStore } from '@/store/store'
import { useDropzone } from 'react-dropzone'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'

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
      toast.info('Please fill all the details!', {
        position: 'top-center'
      })
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
      toast.success('file uploaded successfully', {
        position: 'top-center',
      })
    } catch (e) {
      console.error('Error while saving file to localStorage', e)
      toast.error('Error while saving file to localStorage', {
        position: 'top-center'
      })
    }
  }

  useEffect(() => {
    console.log('useEffect for loading files is running');
    try {
      const storedFiles = JSON.parse(localStorage.getItem('files')) || []
      storedFiles.forEach((file) => {
        // Adding a check to see if the file already exists in the store
        const fileExists = useStore.getState().files.some(
          (storedFile) => storedFile.name === file.name
        );
        if (!fileExists) {
          addFile(file);
        }
      });
    } catch (e) {
      console.error('Error loading from localStorage', e)
      toast.error('Error while loading from localStorage', {
        position: 'top-center'
      })
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
