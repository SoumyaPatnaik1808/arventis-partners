const fs = require('fs');
const files = [
  'app/page.tsx', 
  'app/components/ContactUs.tsx', 
  'app/our-people/page.tsx', 
  'app/our-people/[slug]/page.tsx', 
  'app/services/consulting/page.tsx', 
  'app/services/legal/page.tsx'
];
files.forEach(f => {
  if(fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    const keyword = "Let's Start the Conversation";
    const idx = content.indexOf(keyword);
    if(idx !== -1) {
      const sectionIdx = content.lastIndexOf('<section', idx);
      if(sectionIdx !== -1) {
        const endIdx = content.indexOf('>', sectionIdx);
        let sectionTag = content.substring(sectionIdx, endIdx + 1);
        sectionTag = sectionTag.replace(/bg-white|bg-\[\#fa0249\]/, 'bg-[#fa0249]');
        sectionTag = sectionTag.replace(/py-\d+( sm:py-\d+)?( md:py-\d+)?/, 'py-10 md:py-12');
        content = content.substring(0, sectionIdx) + sectionTag + content.substring(endIdx + 1);
        fs.writeFileSync(f, content);
        console.log('Updated ' + f);
      }
    }
  }
});
