import { Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { Task } from '../entity/Task'
import { User } from '../entity/User'
import { z } from 'zod'
import { TaskPriority, TaskStatus } from '../enums/Task'
import { parse, format } from 'date-fns'

const taskRepository = AppDataSource.getRepository(Task)
const userRepository = AppDataSource.getRepository(User)

const createTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.string(),
  priority: z.string(),
  dueDate: z.string()
})

export const createTask = async (req: Request, res: Response) => {
  try {
    const { success } = createTaskSchema.safeParse(req.body)
    if (!success) {
      return res.status(411).json({
        message: 'Invalid input provided!'
      })
    }

    let { title, description, dueDate, status, priority } = req.body

    if (status && !Object.values(TaskStatus).includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' })
    }

    if (priority && !Object.values(TaskPriority).includes(priority)) {
      return res.status(400).json({ message: 'Invalid priority value' })
    }

    const userId = (req as any).userId

    const user = await userRepository.findOneBy({ id: userId })
    if (!user) {
      return res.status(404).json({
        message: 'User not found!'
      })
    }

    if (dueDate) {
      const parsedDate = parse(dueDate, 'dd/MM/yyyy', new Date())
      dueDate = new Date(format(parsedDate, 'yyyy-MM-dd'))
    }

    const task = taskRepository.create({
      title,
      description,
      dueDate,
      priority,
      status
    })
    task.user = user
    await taskRepository.save(task)

    return res.status(201).json({
      message: 'Task created successfully!'
    })
  } catch (err) {
    console.error(err)
    return res
      .status(500)
      .json({ message: 'Internal server error while creating task...' })
  }
}

export const getTasks = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId
    const page = parseInt(req.query.page as string, 10) || 1
    const limit = parseInt(req.query.limit as string, 10) || 5

    if (page < 1 || limit < 1) {
      return res
        .status(400)
        .json({ message: 'Page and limit must be greater than 0' })
    }

    const [tasks, total] = await taskRepository.findAndCount({
      where: { user: { id: userId } },
      skip: (page - 1) * limit,
      take: limit
    })

    console.log("tasks = ", tasks);
    
    return res.status(200).json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      tasks
    })
  } catch (err) {
    console.error(err)
    return res
      .status(500)
      .json({ message: 'Internal server error while getting tasks...' })
  }
}

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { title, description, dueDate, priority, status } = req.body
    const userId = (req as any).userId

    const task = await taskRepository.findOne({
      where: { id: parseInt(id), user: { id: userId } }
    })
    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }

    task.title = title ? title : task.title
    task.description = description ? description : task.description
    task.status = status ? status : task.status
    task.priority = priority ? priority : task.priority
    if (dueDate) {
      const parseDate = parse(dueDate, 'dd/MM/yyyy', new Date())
      task.dueDate = new Date(format(parseDate, 'yyyy-MM-dd'))
    }

    await taskRepository.save(task)
    return res.status(200).json({
      task
    })
  } catch (err) {
    console.error(err)
    return res
      .status(500)
      .json({ message: 'Internal server error while updating task...' })
  }
}

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const userId = (req as any).userId

    const task = await taskRepository.findOne({
      where: { id: parseInt(id), user: { id: userId } }
    })
    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }

    await taskRepository.remove(task)

    return res.status(500).json({
      message: 'Task deleted successfully!'
    })
  } catch (err) {
    console.error(err)
    return res
      .status(500)
      .json({ message: 'Internal server error while deleting task...' })
  }
}

export const getSingleTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const task = await taskRepository.findOneBy({ id: parseInt(id) })

    if (!task) {
      return res.status(404).json({
        message: 'Task not found!'
      })
    }

    return res.status(200).json({
      task
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({
      message: 'Internal server error while getting single task...'
    })
  }
}

// filter and search
export const filterTasks = async (req: Request, res: Response) => {
  const { status, priority, dueDate } = req.query
  let queryBuilder = taskRepository.createQueryBuilder('task')

  if (status) {
    queryBuilder = queryBuilder.andWhere('task.status = :status', {
      status: status as TaskStatus
    })
  }

  if (priority) {
    queryBuilder = queryBuilder.andWhere('task.priority = :priority', {
      priority: priority as TaskPriority
    })
  }

  if (dueDate) {
    const parsedDate = new Date(dueDate as string)
    queryBuilder = queryBuilder.andWhere('task.dueDate = :due_date', {
      dueDate: parsedDate
    })
  }

  try {
    const tasks = await queryBuilder.getMany()
    return res.status(200).json(tasks)
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .json({ message: 'Internal server error while filtering tasks', error })
  }
}

export const searchTasks = async (req: Request, res: Response) => {
  const { query } = req.query

  if (!query) {
    return res.status(400).json({ message: 'Query parameter is required' })
  }

  try {
    const tasks = await taskRepository
      .createQueryBuilder('task')
      .where('task.title ILIKE :query OR task.description ILIKE :query', {
        query: `%${query}%`
      })
      .getMany()

    return res.status(200).json(tasks)
  } catch (error) {
    return res.status(500).json({ message: 'Error searching tasks', error })
  }
}
