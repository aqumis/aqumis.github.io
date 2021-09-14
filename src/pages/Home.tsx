import {
	IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
	IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,
	IonCardContent, IonImg, IonSearchbar, IonList, IonItemSliding,
	IonItem, IonItemOptions, IonItemOption, IonFab, IonFabButton
} from '@ionic/react';
import { PencilOutline } from 'react-ionicons';

import './Home.css';

import {Item} from '../components/Item';

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>カタログ</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">カタログ</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonSearchbar value={""} onIonChange={e => console.log("bcd")}></IonSearchbar>
				<IonFab vertical="bottom" horizontal="end" slot="fixed">
					<a href="/personalize">
					<IonFabButton>
						<PencilOutline />
					</IonFabButton>
					</a>
				</IonFab>
				<IonList>
					<Item
						genre="メークアップ"
						title="クリニーク イーブン ベター メークアップ 15"
						reason="肌の色とマッチ"
						image="5276.jpg"
					/>
					<Item
						genre="下地"
						title="クリニーク イーブン ベター ダーク スポット ディフェンス 50"
						reason="乾燥肌におすすめ"
						image="35802.jpg"
					/>
					<Item
						genre="エマルジョン"
						title="クリニーク iD カートリッジ コンセントレート TX (角層ケア) (DDML+)"
						image="vcl181226.jpg"
						reason="30代におすすめ"
					/>
					<Item
						genre="パウダー"
						title="クリニーク スーパーブレンデッド フェース パウダー"
						image="6539.jpg"
						reason="30代におすすめ"
					/>
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default Home;
