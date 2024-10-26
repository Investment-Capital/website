import {
  ContextMenuCommandBuilder,
  SlashCommandBuilder,
  SlashCommandSubcommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
} from "discord.js";

type Command = {
  data: Partial<
    | SlashCommandBuilder
    | SlashCommandSubcommandBuilder
    | ContextMenuCommandBuilder
    | SlashCommandSubcommandsOnlyBuilder
  >;

  requiresAccount: boolean;
  category: string;
  disabled: boolean;
  requiedPrestige: number;
  admin: boolean;
  owner: boolean;

  guilds?: string[];
};

export default Command;
