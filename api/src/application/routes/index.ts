import { Router } from 'express'
import { feedbackHandler } from '@/application/handlers/feedback'

export const router = Router()

router.post('/feedbacks', feedbackHandler.store)
