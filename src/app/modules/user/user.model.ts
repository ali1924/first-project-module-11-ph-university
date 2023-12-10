import { Schema, model } from 'mongoose'
import { TUser } from './user.interface'

const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: true },
    password: { type: String, required: true },
    needPasswordChange: { type: Boolean, default: true },
    role: {
      type: String,
      enum: {
        values: ['admin', 'faculty', 'student'],
        message: '{VALUE} is not valid status',
      },
    },
    status: {
      type: String,
      enum: {
        values: ['in-progress', 'blocked'],
        message: '{VALUE} is not valid status',
        default: 'in-progress',
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    //   createdAt: {
    //     type: Date,
    //     default: Date.now(),
    //   },
  },
  {
    timestamps: true,
  },
)

export const User = model<TUser>('User', userSchema)
