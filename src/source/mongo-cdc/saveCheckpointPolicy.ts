import { OutboxMessage } from "../sourceConnector"

export type SaveCheckpointPolicy = (messageCount: number, message: OutboxMessage) => boolean
export const saveCheckpointEvery = (times: number): SaveCheckpointPolicy =>
    (count, _) => count % times == 0