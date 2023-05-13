import { Command } from './type';
import { default as Hello } from './Hello';
import { default as Ping } from './Ping';

export const commands: Command[] = [Hello, Ping];
