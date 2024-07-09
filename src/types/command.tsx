import {
  ContextMenuCommandBuilder,
  SlashCommandBuilder,
  SlashCommandSubcommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
} from "discord.js";

type Command = {
  data:
    | SlashCommandBuilder
    | SlashCommandSubcommandBuilder
    | ContextMenuCommandBuilder
    | SlashCommandSubcommandsOnlyBuilder;
  category: string;
  disabled: boolean;
  requiredPrestige: number;
  global: boolean;
  requiresAccount: boolean;
  owner: boolean;
  admin: boolean;
};

export default Command;
