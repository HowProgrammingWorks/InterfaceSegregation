export interface IFile {
  filename: string;
}

export interface IData {
  filename: string;
  content: NodeJS.Buffer;
}

export interface IAttachment {
  filename: string;
  readable: NodeJS.ReadableStream;
}

export class Attachment implements IAttachment {
  filename: string;
  readable: NodeJS.ReadableStream;
  constructor(filename: string);
}

export interface IMessage {
  to: string;
  subject: string;
  text: string;
  files: Array<IData>;
  attach(attachment: IAttachment): Promise<void>;
}

export class Message implements IMessage {
  to: string;
  subject: string;
  text: string;
  files: Array<IData>;
  constructor(to: string, subject: string, text: string);
  attach(attachment: IAttachment): Promise<void>;
}

export function send(message: IMessage): Promise<void>;

export function canAttach(files: Array<IFile>): Promise<boolean>;
