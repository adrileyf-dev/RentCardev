import multer from 'multer';
import { resolve } from 'path';
import * as crypto from 'crypto';
export default {
  upload(folder: string): multer.Options {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString('hex');
          const filename = `${fileHash}-${file.originalname}`;
          return callback(null, filename);
        },
      }),
    };
  },
};

/**
 * Exemplo inspirado em padrões de código do Nubank:
 * Função para validar extensões de arquivos permitidas.
 */
/*export function isAllowedExtension(filename: string, allowedExtensions: string[] = ['.jpg', '.png', '.pdf']): boolean {
  const ext = filename.slice(filename.lastIndexOf('.')).toLowerCase();
  return allowedExtensions.includes(ext);
}*/
