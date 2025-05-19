/**
 * Estrutura de menu (edite à vontade).
 * - `label`: texto exibido
 * - `to`: rota (quando não tem submenu)
 * - `children`: array de objetos { label, to } (quando há submenu)
 */
const navConfig = [
  { label: 'INÍCIO', to: '/' },
  {
    label: 'SEaDIP',
    children: [
      { label: 'Sobre', to: '/seadip/sobre' },
      { label: 'Equipe', to: '/seadip/equipe' },
    ],
  },
  {
    label: 'LEGISLAÇÃO EaD',
    children: [
      { label: 'Normas Internas', to: '/legislacao/normas' },
      { label: 'Resoluções', to: '/legislacao/resolucoes' },
    ],
  },
  {
    label: 'CURSOS',
    children: [
      { label: 'Graduação', to: '/cursos/graduacao' },
      { label: 'Especialização', to: '/cursos/especializacao' },
    ],
  },
  { label: 'LABCIPEAD', children: [{ label: 'Apresentação', to: '/labcipead' }] },
  { label: 'UAB', children: [{ label: 'Pólos', to: '/uab/polos' }] },
  {
    label: 'UFPR VIRTUAL / UFPR ABERTA',
    children: [
      { label: 'UFPR Virtual', to: '/ufpr-virtual' },
      { label: 'UFPR Aberta', to: '/ufpr-aberta' },
    ],
  },
  { label: 'CONTATO', to: '/contato' },
  { label: 'TRANSPARÊNCIA', children: [{ label: 'Portal', to: '/transparencia' }] },
];

export default navConfig;
