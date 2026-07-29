const fs = require('fs');
const path = require('path');

const dirs = [
  'quero-criar-um-app-saas-por-onde-comecar',
  'velocidade-de-site-afeta-o-caixa-da-empresa',
  'quantas-brechas-o-seu-site-esconde-sem-voce-saber',
  'conversao-e-landing-page-como-transformar-visitante-em-lead'
];

dirs.forEach(dir => {
  const filePath = path.join(__dirname, 'src/app/blog', dir, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('<AudioPlayer')) {
    console.log(`Already has AudioPlayer: ${dir}`);
    return;
  }

  // 1. Add import
  if (!content.includes("import AudioPlayer")) {
    content = content.replace("import { TableOfContents } from '@/components/ui/TableOfContents';", "import { TableOfContents } from '@/components/ui/TableOfContents';\nimport AudioPlayer from '@/components/AudioPlayer';");
  }

  // 2. Extract prose content to create text string
  // Use a regex that grabs everything from <div className="prose..."> up to the closing tags before the Sidebar
  const proseMatch = content.match(/<div className="prose prose-lg prose-zinc max-w-none">([\s\S]*?)<\/div>\s*<\/div>\s*\{\/\*\s*Sidebar\s*\*\/\}/);
  if (!proseMatch) {
    console.log(`Could not find prose block in ${dir}`);
    return;
  }
  
  let proseContent = proseMatch[1];
  
  // Strip HTML tags and clean up string
  let plainText = proseContent.replace(/<[^>]+>/g, ' ');
  // Replace multiple spaces/newlines with single space
  plainText = plainText.replace(/\s+/g, ' ').trim();

  // Escape backticks and dollar signs for template literals
  plainText = plainText.replace(/`/g, '\\`').replace(/\$/g, '\\$');

  // 3. Inject AudioPlayer component before the prose div
  const injectTarget = '<div className="prose prose-lg prose-zinc max-w-none">';
  const audioBlock = `
            {/* Audio Player */}
            <div className="mb-12">
              <AudioPlayer 
                title="Ouvir artigo"
                text={\`${plainText}\`}
              />
            </div>

            <div className="prose prose-lg prose-zinc max-w-none">`;

  content = content.replace(injectTarget, audioBlock);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${dir}`);
});
