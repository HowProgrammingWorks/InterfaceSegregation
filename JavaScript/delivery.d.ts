export class Message {
  to: string;
  subject: string;
  text: string;
  files: Array<{ filename: string, content: NodeJS.Buffer }>;
  constructor(to: string, subject: string, text: string);
  attach(filename: string): Promise<void>;
  send(): Promise<void>;
  warn(cause);
}
