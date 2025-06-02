import React, { useMemo } from 'react';
import { TextField, Autocomplete } from '@mui/material';

/**
 * @param {Array} sectors      – array vindo da API
 * @param {Function} onSelect  – callback(path) → { sector, course, discipline }
 */
export default function SearchDiscipline({ sectors, onSelect }) {
  // “achata” todas as disciplinas em um array
  const options = useMemo(() => {
    const list = [];
    sectors.forEach(sec =>
      sec.courses.forEach(cur =>
        cur.disciplines.forEach(dis =>
          list.push({
            label: `${dis.code} – ${dis.name}`,
            sector: sec.name,
            course: cur.name,
            discipline: dis.code
          })
        )
      )
    );
    return list;
  }, [sectors]);

  return (
    <Autocomplete
      fullWidth
      size="small"
      disablePortal
      options={options}
      getOptionLabel={(opt) => opt.label}
      onChange={(_e, value) => value && onSelect(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Buscar disciplina"
          placeholder="Digite código ou nome..."
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: "10px 10px 0 0",
              border: '0px',
            },
          }}
        />
      )}
      sx={{
        backgroundColor: '#fff',
        border: '0px',
        borderRadius: '10px 10px 0 0', 
        paddingTop: 1,
      }}
    />
  );
}
