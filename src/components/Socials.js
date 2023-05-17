import React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import RedditIcon from '@mui/icons-material/Reddit';

function Socials() {
    return (
        <div className="Socials">
            <Button variant="contained" color="primary" href="https://github.com/zubyj/the-office-chat-bot" target="_blank" rel="noreferrer noopener" startIcon={<GitHubIcon />} style={{ marginRight: '10px' }}>
                Project Code
            </Button>
            <Button variant="contained" color="primary" href="https://theofficescript.com" target="_blank" rel="noreferrer noopener" startIcon={<CodeIcon />} style={{ marginRight: '10px' }}>
                The Office Script API
            </Button>
            <Button variant="contained" color="primary" href="https://www.reddit.com/user/the-office-bot/" target="_blank" rel="noreferrer noopener" startIcon={<RedditIcon />}>
                Reddit Bots
            </Button>
        </div>
    );
}

export default Socials;
