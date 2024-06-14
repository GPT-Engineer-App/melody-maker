import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import { Box, Button, VStack, HStack, Text } from '@chakra-ui/react';
import { FaPlay, FaStop, FaRecordVinyl } from 'react-icons/fa';

const Sequencer = ({ tracks }) => {
  return (
    <Box>
      {tracks.map((track, index) => (
        <Box key={index} border="1px solid black" p={2} mb={2}>
          <Text>Track {index + 1}</Text>
          <HStack>
            {track.map((note, noteIndex) => (
              <Box key={noteIndex} w="20px" h="20px" bg={note ? 'blue' : 'gray'} />
            ))}
          </HStack>
        </Box>
      ))}
    </Box>
  );
};

const VirtualInstrument = ({ instrumentType }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedNotes, setRecordedNotes] = useState([]);
  const [currentTrack, setCurrentTrack] = useState([]);
  const [synth, setSynth] = useState(null);

  useEffect(() => {
    if (instrumentType === 'piano') {
      setSynth(new Tone.Sampler({
        urls: {
          A1: "A1.mp3",
          C2: "C2.mp3",
          "D#2": "Ds2.mp3",
          "F#2": "Fs2.mp3",
          A2: "A2.mp3",
          C3: "C3.mp3",
          "D#3": "Ds3.mp3",
          "F#3": "Fs3.mp3",
          A3: "A3.mp3",
          C4: "C4.mp3",
          "D#4": "Ds4.mp3",
          "F#4": "Fs4.mp3",
          A4: "A4.mp3",
          C5: "C5.mp3",
          "D#5": "Ds5.mp3",
          "F#5": "Fs5.mp3",
          A5: "A5.mp3",
          C6: "C6.mp3",
          "D#6": "Ds6.mp3",
          "F#6": "Fs6.mp3",
          A6: "A6.mp3",
          C7: "C7.mp3",
          "D#7": "Ds7.mp3",
          "F#7": "Fs7.mp3",
          A7: "A7.mp3",
          C8: "C8.mp3"
        },
        release: 1,
        baseUrl: "https://tonejs.github.io/audio/salamander/"
      }).toDestination());
    } else if (instrumentType === 'guitar') {
      setSynth(new Tone.Sampler({
        urls: {
          A1: "A1.mp3",
          C2: "C2.mp3",
          "D#2": "Ds2.mp3",
          "F#2": "Fs2.mp3",
          A2: "A2.mp3",
          C3: "C3.mp3",
          "D#3": "Ds3.mp3",
          "F#3": "Fs3.mp3",
          A3: "A3.mp3",
          C4: "C4.mp3",
          "D#4": "Ds4.mp3",
          "F#4": "Fs4.mp3",
          A4: "A4.mp3",
          C5: "C5.mp3",
          "D#5": "Ds5.mp3",
          "F#5": "Fs5.mp3",
          A5: "A5.mp3",
          C6: "C6.mp3",
          "D#6": "Ds6.mp3",
          "F#6": "Fs6.mp3",
          A6: "A6.mp3",
          C7: "C7.mp3",
          "D#7": "Ds7.mp3",
          "F#7": "Fs7.mp3",
          A7: "A7.mp3",
          C8: "C8.mp3"
        },
        release: 1,
        baseUrl: "https://tonejs.github.io/audio/salamander/"
      }).toDestination());
    } else if (instrumentType === 'drums') {
      setSynth(new Tone.Sampler({
        urls: {
          A1: "A1.mp3",
          C2: "C2.mp3",
          "D#2": "Ds2.mp3",
          "F#2": "Fs2.mp3",
          A2: "A2.mp3",
          C3: "C3.mp3",
          "D#3": "Ds3.mp3",
          "F#3": "Fs3.mp3",
          A3: "A3.mp3",
          C4: "C4.mp3",
          "D#4": "Ds4.mp3",
          "F#4": "Fs4.mp3",
          A4: "A4.mp3",
          C5: "C5.mp3",
          "D#5": "Ds5.mp3",
          "F#5": "Fs5.mp3",
          A5: "A5.mp3",
          C6: "C6.mp3",
          "D#6": "Ds6.mp3",
          "F#6": "Fs6.mp3",
          A6: "A6.mp3",
          C7: "C7.mp3",
          "D#7": "Ds7.mp3",
          "F#7": "Fs7.mp3",
          A7: "A7.mp3",
          C8: "C8.mp3"
        },
        release: 1,
        baseUrl: "https://tonejs.github.io/audio/salamander/"
      }).toDestination());
    }
  }, [instrumentType]);

  const playNote = (note) => {
    if (synth) {
      synth.triggerAttackRelease(note, "8n");
      if (isRecording) {
        setCurrentTrack([...currentTrack, note]);
      }
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    setCurrentTrack([]);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setRecordedNotes([...recordedNotes, currentTrack]);
  };

  const playRecording = () => {
    if (recordedNotes.length > 0) {
      const now = Tone.now();
      recordedNotes.forEach((track, trackIndex) => {
        track.forEach((note, noteIndex) => {
          synth.triggerAttackRelease(note, "8n", now + noteIndex * 0.5);
        });
      });
    }
  };

  return (
    <VStack spacing={4}>
      <HStack spacing={2}>
        <Button onClick={startRecording} leftIcon={<FaRecordVinyl />} colorScheme="red">Record</Button>
        <Button onClick={stopRecording} leftIcon={<FaStop />} colorScheme="yellow">Stop</Button>
        <Button onClick={playRecording} leftIcon={<FaPlay />} colorScheme="green">Play</Button>
      </HStack>
      <HStack spacing={2}>
        {['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'].map(note => (
          <Button key={note} onClick={() => playNote(note)}>{note}</Button>
        ))}
      </HStack>
      <Sequencer tracks={recordedNotes} />
    </VStack>
  );
};

export default VirtualInstrument;