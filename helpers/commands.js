// Commands => start, help, about.

startMsg = async (ctx) =>
{
    ctx.reply(`👋 Hey ${ctx.from.first_name} ..\n\nWith me you can convert TORRENT file to MAGNET Link & vice versa.\nI can handle groups also.\n\nCommands: /help /about\n`,
    {
        parse_mode: "HTML",
        reply_to_message_id: ctx.message.message_id,
        reply_markup:{
            inline_keyboard: [
                [
                    {text: '💫 Main Channel 💫', url:'https://t.me/Movies_X_Animes'},
                    {text: '🌟 Bots Channel 🌟', url:'https://t.me/MxA_Bots'}
                ]
            ]
        } 
    })
};

helpMsg = async (ctx) =>
{
    ctx.reply(`I can convert magnet links to torrent files and vice versa.\nI can manage your torrent / leech groups also. <a href="http://t.me/Mxa_Torrent_Magnet_ConverterBot?startgroup=start">Add me to your groups.</a>`,
    {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_to_message_id: ctx.message.message_id 
    })
};

aboutMsg = async (ctx) =>
{
    ctx.reply(`Developer: @MxA_Bots\nFramework: <a href="https://grammy.dev">grammY</a> 💙\nSource Code: Privet 🥺`,
    {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_to_message_id: ctx.message.message_id,
        reply_markup:{
            inline_keyboard: [
                [
                    {text: '🌟 Movies 🌟', url:'https://t.me/MxA_Animes'}
                ]
            ]
        } 
    })
};

module.exports = { startMsg, helpMsg, aboutMsg }
