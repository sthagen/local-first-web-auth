import fs from 'fs'
import { LocalFirstAuthSyncServer } from '@localfirst/auth-syncserver'

const storageDir = '.dev-sync-server-data'

const DEFAULT_PORT = 3030
const port = Number(process.env.PORT) || DEFAULT_PORT
const host = process.env.HOST || 'localhost'

const server = new LocalFirstAuthSyncServer(host)

server.listen({ port, storageDir })
