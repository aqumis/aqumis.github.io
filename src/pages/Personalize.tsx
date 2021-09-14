import {
	IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
	IonList, IonListHeader, IonLabel, IonRadioGroup,
	IonRadio, IonItem, IonButtons, IonBackButton
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
			<IonButtons slot="start">
				<IonBackButton defaultHref="/" />
			</IonButtons>
				<IonTitle>プロファイル</IonTitle>
		</IonToolbar>
	  </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">プロファイル</IonTitle>
          </IonToolbar>
        </IonHeader>
	<IonList>
		<IonRadioGroup value={undefined} onIonChange={e => undefined}>
			<IonListHeader>
				<IonLabel>性別</IonLabel>
			</IonListHeader>
			<IonItem>
				<IonLabel>女</IonLabel>
				<IonRadio slot="start" value="W" />
			</IonItem>
			<IonItem>
				<IonLabel>男</IonLabel>
				<IonRadio slot="start" value="M" />
			</IonItem>
		</IonRadioGroup>
		<IonRadioGroup value={undefined} onIonChange={e => undefined}>
			<IonListHeader>
				<IonLabel>年代</IonLabel>
			</IonListHeader>
			<IonItem>
				<IonLabel>10代</IonLabel>
				<IonRadio slot="start" value="A1" />
			</IonItem>
			<IonItem>
				<IonLabel>20代</IonLabel>
				<IonRadio slot="start" value="A2" />
			</IonItem>
			<IonItem>
				<IonLabel>30代</IonLabel>
				<IonRadio slot="start" value="A3" />
			</IonItem>
			<IonItem>
				<IonLabel>40代以上</IonLabel>
				<IonRadio slot="start" value="A4" />
			</IonItem>
		</IonRadioGroup>
		<IonRadioGroup value={undefined} onIonChange={e => undefined}>
			<IonListHeader>
				<IonLabel>来店方法</IonLabel>
			</IonListHeader>
			<IonItem>
				<IonLabel>徒歩</IonLabel>
				<IonRadio slot="start" value="A1" />
			</IonItem>
			<IonItem>
				<IonLabel>自転車</IonLabel>
				<IonRadio slot="start" value="A2" />
			</IonItem>
			<IonItem>
				<IonLabel>バス</IonLabel>
				<IonRadio slot="start" value="A3" />
			</IonItem>
			<IonItem>
				<IonLabel>電車</IonLabel>
				<IonRadio slot="start" value="A4" />
			</IonItem>
		</IonRadioGroup>
		<IonRadioGroup value={undefined} onIonChange={e => undefined}>
			<IonListHeader>
				<IonLabel>来店動機</IonLabel>
			</IonListHeader>
			<IonItem>
				<IonLabel>SNS</IonLabel>
				<IonRadio slot="start" value="A1" />
			</IonItem>
			<IonItem>
				<IonLabel>トレンド</IonLabel>
				<IonRadio slot="start" value="A2" />
			</IonItem>
			<IonItem>
				<IonLabel>目的の商品</IonLabel>
				<IonRadio slot="start" value="A3" />
			</IonItem>
			<IonItem>
				<IonLabel>プレゼント</IonLabel>
				<IonRadio slot="start" value="A4" />
			</IonItem>
		</IonRadioGroup>
		<IonRadioGroup value={undefined} onIonChange={e => undefined}>
			<IonListHeader>
				<IonLabel>肌タイプ</IonLabel>
			</IonListHeader>
			<IonItem>
				<IonLabel>乾燥肌</IonLabel>
				<IonRadio slot="start" value="A1" />
			</IonItem>
			<IonItem>
				<IonLabel>オイリー肌</IonLabel>
				<IonRadio slot="start" value="A2" />
			</IonItem>
			<IonItem>
				<IonLabel>敏感肌</IonLabel>
				<IonRadio slot="start" value="A3" />
			</IonItem>
			<IonItem>
				<IonLabel>混合肌</IonLabel>
				<IonRadio slot="start" value="A4" />
			</IonItem>
		</IonRadioGroup>
		<IonRadioGroup value={undefined} onIonChange={e => undefined}>
			<IonListHeader>
				<IonLabel>ベース色</IonLabel>
			</IonListHeader>
			<IonItem>
				<IonLabel>イエロー</IonLabel>
				<IonRadio slot="start" value="A1" />
			</IonItem>
			<IonItem>
				<IonLabel>ピンク</IonLabel>
				<IonRadio slot="start" value="A2" />
			</IonItem>
			<IonItem>
				<IonLabel>ベージュ</IonLabel>
				<IonRadio slot="start" value="A3" />
			</IonItem>
			<IonItem>
				<IonLabel>ブラウン</IonLabel>
				<IonRadio slot="start" value="A4" />
			</IonItem>
		</IonRadioGroup>
		<IonRadioGroup value={undefined} onIonChange={e => undefined}>
			<IonListHeader>
				<IonLabel>悩み</IonLabel>
			</IonListHeader>
			<IonItem>
				<IonLabel>シミ、傷</IonLabel>
				<IonRadio slot="start" value="A1" />
			</IonItem>
			<IonItem>
				<IonLabel>ほくろ</IonLabel>
				<IonRadio slot="start" value="A2" />
			</IonItem>
			<IonItem>
				<IonLabel>肌のテカり</IonLabel>
				<IonRadio slot="start" value="A3" />
			</IonItem>
			<IonItem>
				<IonLabel>化粧乗りの悪さ</IonLabel>
				<IonRadio slot="start" value="A4" />
			</IonItem>
		</IonRadioGroup>
	</IonList>
	</IonContent>
	</IonPage>
  );
};

export default Home;
