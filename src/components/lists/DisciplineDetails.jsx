import { Typography, List, ListItem, Link } from '@mui/material';

export default function DisciplineDetails({ discipline }) {
  const {
    nature,
    syllabus,
    bibliography,
    extraBibliography = [],
    offers = []
  } = discipline;

  return (
    <>
      <Typography variant="subtitle2">Natureza: {nature}</Typography>

      {syllabus && (
        <Typography sx={{ mt: 1 }}>
          <strong>Ementa:</strong> {syllabus}
        </Typography>
      )}

      {bibliography && (
        <Typography sx={{ mt: 1 }}>
          <strong>Bibliografia Básica:</strong> {bibliography}
        </Typography>
      )}

      {extraBibliography.length > 0 && (
        <>
          <Typography sx={{ mt: 1 }}>
            <strong>Bibliografia Complementar:</strong>
          </Typography>
          <List dense>
            {extraBibliography.map((item, idx) => (
              <ListItem key={idx} sx={{ display: 'list-item', pl: 2 }}>
                {item.startsWith('http') ? (
                  <Link href={item} target="_blank" rel="noopener">
                    {item}
                  </Link>
                ) : (
                  item
                )}
              </ListItem>
            ))}
          </List>
        </>
      )}

      {offers.length > 0 && (
        <>
          <Typography sx={{ mt: 1 }}>
            <strong>Ofertas:</strong>
          </Typography>
          <List dense>
            {offers.map(o => (
              <ListItem key={o} sx={{ display: 'list-item', pl: 2 }}>
                {o}
              </ListItem>
            ))}
          </List>
        </>
      )}
    </>
  );
}
