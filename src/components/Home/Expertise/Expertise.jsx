import React from 'react';
import ContentHeadTitle from '../../components/ContentHeadTitlte/ContentHeadTitle';
import classes from './Expertise.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { motion } from 'framer-motion';
function createData(name, calories, fat, carbs, protein, top, bot) {
  return { name, calories, fat, carbs, protein, top, bot };
}

const rows = [
  createData('8:00 - 9:20', 'Маалым. систем.ж. бер. базасы доц.м.а.Керимов У.', "ФМ билим беруудогу ОМ доц.м.а. Султанбаева Г.", "Информатиканын теориялык негиздери  доц.м.а. Султанбаева Г", "Практика", "Комп.туйун жана телекомуникациялар системасы доц. Юсупов К.", "--------"),
  createData('', 'Маалым. систем.ж. бер. базасы доц.м.а.Керимов У.', "--------", "Информатиканын теориялык негиздери доц.м.а. Султанбаева Г", "Практика", "Комп.туйун жана телекомуникациялар системасы доц. Юсупов К.", "--------"),
  createData('9:30 - 10:50', "--------", "ФМ билим беруудогу ОМ доц.м.а. Султанбаева Г.", "ППРПОЗ на ПК и.о.доц.Султанбаева Г", "Практика", "Комп.туйун жана телекомуникациялар системасы доц. Юсупов К.", "Стандарттык эмес жана койгойлуу кырдаалдык маселелрди прог-о ага окут. Ачекее К."),
  createData('', "--------", "--------", "ППРПОЗ на ПК и.о.доц.Султанбаева Г", "Практика", "Комп.туйун жана телекомуникациялар системасы доц. Юсупов К.", "Стандарттык эмес жана койгойлуу кырдаалдык маселелрди прог-о ага окут. Ачекее К."),
  createData('11:00 - 12:20', "--------", "Маалыматтар коопсуздугу доц. Кашкароева А.А", "Математикалык жана физикалык маселелерди компьютердик моделдоо ага окут. Барганалиева Ж", "Практика", "Математикалык жана физикалык маселелерди компьютердик моделдоо ага окут. Барганалиева Ж.", "Стандарттык эмес жана койгойлуу кырдаалдык маселелрди прог-о ага окут. Ачекее К."),
  createData('', "--------", "Маалыматтар коопсуздугу доц. Кашкароева А.А", "--------", "Практика", "--------", "Стандарттык эмес жана койгойлуу кырдаалдык маселелрди прог-о ага окут. Ачекее К."),
  createData('12:30 - 13:50', "--------", "--------", "--------", "Практика", "--------", "Математикалык жана физикалык маселелерди компьютердик моделдоо ага окут. Барганалиева Ж"),
  createData('', "--------", "--------", "--------", "Практика", "--------", "--------"),

];
const tableHeadText = ["Время занятий", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
function Expertise() {
  return (
    <div id={'expertise'} className='container'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className={classes.heading}>
        <ContentHeadTitle title='Расписание группы' centered />
      </motion.div>
      <motion.h4
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className={classes.popi}>Проведите влево/вправо по таблице чтобы увидеть остальные дни</motion.h4>
      <motion.div
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className={classes.card_section}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 320 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {tableHeadText.map((item, iindex) => (
                  <TableCell key={iindex} align="center" style={{ border: '1px solid lightgray', fontWeight: 'bold' }}>{item}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align='left' style={{ width: '100px' }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="center" style={{ border: '1px solid lightgray' }}>{row.calories}</TableCell>
                  <TableCell align="center" style={{ border: '1px solid lightgray' }}>{row.fat}</TableCell>
                  <TableCell align="center" style={{ border: '1px solid lightgray' }}>{row.carbs}</TableCell>
                  <TableCell align="center" style={{ background: "yellow", border: '1px solid lightgray' }} >{row.protein}</TableCell>
                  <TableCell align="center" style={{ border: '1px solid lightgray' }}>{row.top}</TableCell>
                  <TableCell align="center" style={{ border: '1px solid lightgray' }}>{row.bot}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </motion.div>
    </div>
  );
}

export default Expertise;
