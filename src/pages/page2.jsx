import { Helmet } from 'react-helmet-async';

import Header from "src/pages/Header/header";
import ApbnVariablKontribusi from '../sections/overview/view/apbn_variabel_kontribusi';
import ApbnPendapatanTarget from '../sections/overview/view/apbn_pendapatan_negara_target'
import ApbnPendapatanRealisasi from '../sections/overview/view/apbn_pendapatan_negara_realisasi'
import ApbnPendapatanCapaian from '../sections/overview/view/apbn_pendapatan_negara_capaian'
import ApbnBelanjaTarget from '../sections/overview/view/apbn_belanja_negara_target'
import ApbnBelanjaRealisasi from '../sections/overview/view/apbn_belanja_negara_realisasi'
import ApbnBelanjaCapaian from '../sections/overview/view/apbn_belanja_negara_capaian'
import ApbnKeseiambanganPrimer from '../sections/overview/view/apbn_keseimbangan_primer'
import ApbnPrediksiPendapatan from '../sections/overview/view/apbn_prediksi_pendapatan'
import ApbnPrediksiBelanja from '../sections/overview/view/apbn_prediksi_belanja'





function Component(){
  return (
    <div>
      <Helmet>
        <title> One Punch Man </title>
      </Helmet>
    <Header/>
    <ApbnVariablKontribusi/>
    <ApbnPendapatanTarget/>
    <ApbnPendapatanRealisasi/>
    <ApbnPendapatanCapaian/>
    <ApbnBelanjaTarget/>
    <ApbnBelanjaRealisasi/>         
    <ApbnBelanjaCapaian/>         
    <ApbnKeseiambanganPrimer/>         
    <ApbnPrediksiPendapatan/>         
    <ApbnPrediksiBelanja/>         


    </div>
  )
};

export default Component;
