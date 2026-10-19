import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";

const STRUCTURE_START = "#";

const autoFormattingMap: { [key: string]: string} = {
  "SectionA": "#FF0000",
  "SectionB": "#0000FF"
}

type LiveModeTextAreaProps = {
  text: string;
};

function LiveModeTextArea({ text }: LiveModeTextAreaProps) {
  const sections = separateSections(text);

  return (
    <Box>
      {
        sections.map((section, index) => {
          const sectionTitle = section.split('\n')[0].replaceAll('#', '').trim()
          
          return (
            <div 
              key={index}
              style={{
                color: autoFormattingMap[sectionTitle]
              }}
            >
              <ReactMarkdown>{section}</ReactMarkdown>
            </div>
          );
        })
      }
    </Box>
  );
}

function separateSections(text: string): string[] {
  const sections: string[] = [];
  let section = "";

  text.split('\n').forEach(line => {
    if (line.startsWith(STRUCTURE_START)) {
      if (section != "") {
        sections.push(section);
      }
      section = line;
    } else if (line != ""){
      if (section != "") {
        section += '\n';
      }
      section += line;
    }
  });

  if (section != "") {
    sections.push(section);
  }

  return sections;
}

export { LiveModeTextArea };