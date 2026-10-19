import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import ReactMarkdown from "react-markdown";

const STRUCTURE_START = "-";
const SCROLL_INDICATOR = "<scroll>";

const autoFormattingMap: { [key: string]: string; } = {
  "intro": "#7c7c7c",
  "interlude": "#7c7c7c",
  "turnaround": "#7c7c7c",
  "verse": "#338a0b",
  "chorus": "#FF0000",
  "bridge": "#040faa",
};

type LiveModeTextAreaProps = {
  text: string;
};

function LiveModeTextArea({ text }: LiveModeTextAreaProps) {
  const targetRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = separateSections(text);

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>, isTopHalf: boolean) {
    console.log("Clicked top half: ", isTopHalf);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        '& ul': {
          margin: 0,
        }
      }}
    >
      {
        sections.map((section, index) => {
          console.log(`Section ${index}:`, section);

          if (section.startsWith(SCROLL_INDICATOR)) {
            return (
              <div
                key={index}
                ref={el => { targetRefs.current[index] = el; }}
              />
            );
          }

          const sectionTitle = section.split('\n')[0]
            .replaceAll(STRUCTURE_START, '').trim()
            .split(" ")[0].toLowerCase(); // remove multiple versions of a structure (e.g. "verse 1", "verse 2", etc.)

          return (
            <div
              key={index}
              style={{
                color: autoFormattingMap[sectionTitle],
              }}
            >
              <Typography>
                <ReactMarkdown>{section}</ReactMarkdown>
              </Typography>
            </div>
          );
        })
      }
      <Box
        sx={{
          height: '50vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1,
          cursor: 'pointer',
        }}
        onClick={(event) => handleClick(event, true)}
      />
      <Box
        sx={{
          height: '50vh',
          width: '100vw',
          position: 'fixed',
          bottom: 0,
          left: 0,
          zIndex: 1,
          cursor: 'pointer',
        }}
        onClick={(event) => handleClick(event, false)}
      />
    </Box >
  );
}

function separateSections(text: string): string[] {
  const sections: string[] = [];
  let section = "";

  text.split('\n').forEach(line => {
    if (line.startsWith(SCROLL_INDICATOR)) {
      if (section != "") {
        sections.push(section);
      }
      sections.push(line);
      section = "";
    } else if (line.startsWith(STRUCTURE_START)) {
      if (section != "") {
        sections.push(section);
      }
      section = line;
    } else if (line != "") {
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