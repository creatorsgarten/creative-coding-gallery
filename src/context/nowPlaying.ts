import { atom } from 'nanostores'

import type { Submission } from '../../@types/Submission'

export const playingVideo = atom<Submission>(null)
export const playingAudio = atom<Submission>(null)
