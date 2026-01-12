local cef = require 'cef' -- Убедись, что библиотека установлена в папке lib

function main()
    if not isSampLoaded() or not isSampfuncsLoaded() then return end
    while not isSampAvailable() do wait(100) end

    sampRegisterChatCommand("atl", function()
        toggleMenu(true)
    end)

    cef.on('atools:closeMenu', function()
        toggleMenu(false)
    end)

    cef.on('atools:manualAction', function(action, id)
        if action == "check_stats" then
            sampSendChat("/pstats " .. id)
        end
    end)

    wait(-1)
end

function toggleMenu(state)
    if state then
        cef.create_browser("ATools", "local://web/index.html")
        sampSetCursorMode(3)
    else
        cef.destroy_browser("ATools")
        sampSetCursorMode(0)
    end
end