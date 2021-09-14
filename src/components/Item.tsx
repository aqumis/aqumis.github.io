import React from "react";
import ReactDOM from "react-dom";

import {
	IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
	IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,
	IonCardContent, IonImg, IonSearchbar, IonList, IonItemSliding,
	IonItem, IonItemOptions, IonItemOption, IonIcon, IonListHeader,
	useIonPopover
} from '@ionic/react';
import styled from 'styled-components';

import { Heart, ThumbsDownOutline, ThumbsUpOutline } from 'react-ionicons';
// import 'ionicons/css/ionicons.min.css';

type ItemStatus = 'Liked' | 'Neutral' | 'Disliked';

type Props = {
	genre: string;
	title: string;
	reason: string;
	image: string;
};

const PopoverList: React.FC<{
	onHide: () => void;
}> = ({ onHide }) => (
	<IonList>
		<IonListHeader>理由</IonListHeader>
		<IonItem button>値段が高い</IonItem>
		<IonItem button>デザインが悪い</IonItem>
		<IonItem button>匂いが合わない</IonItem>
		<IonItem button>色が好みでない</IonItem>
		<IonItem lines="none" detail={false} button onClick={onHide}>
			Close
		</IonItem>
	</IonList>
);

export const Item: React.FC<Props> = (props: Props) => {

	const [stat, setStat] = React.useState<ItemStatus>('Neutral');
	const [present, dismiss] = useIonPopover(PopoverList, { onHide: () => dismiss() });
	let slided = false;
	async function handleSlide(e: any) {
		let item = e.target
		let r = await item.getSlidingRatio();
		// if (slided) {
		// 	if (-0.5 < r && r < 0.5) {
		// 		slided = false;
		// 	}
		// 	return;
		// } else {
			let newStat: ItemStatus = stat;
			if (r > 1.0) {
				// if (stat !== 'Liked') {
					newStat = 'Liked';
				// } else {
				// 	newStat = 'Neutral';
				// }
			} else if (r < -1.0) {
				// if (stat !== 'Disliked') {
				newStat = 'Disliked';
				// } else {
				// 	newStat = 'Neutral';
				// }
			} else {
				return;
			}
			slided = true;
		await item.close();
			if (stat != newStat) {
				if (newStat === 'Disliked') {
					present({
						event: e.nativeEvent
					});
				}
				setStat(newStat);
			}
		// }
	}
	let ImageContainer = styled.div`
		position: relative;
		display: ${stat === 'Disliked' ? 'none' : 'block'};
	`;
	let ImageIcon = styled.div`
		position: absolute;
		top: 2em;
		right: 2em;
		width: 4em;
		height: 4em;
		visibility: ${stat === 'Liked'? 'visible' : 'hidden'};
	`;
	return (
		<IonItemSliding onIonDrag={handleSlide}>
			<IonItemOptions side="start">
				<IonItemOption color="dark" expandable>
					<ThumbsDownOutline color="white" width="4em" />
				</IonItemOption>
			</IonItemOptions>
			<IonItemOptions side="end">
				<IonItemOption color="danger" expandable>
					<ThumbsUpOutline color="white" width="4em" />
				</IonItemOption>
			</IonItemOptions>
			<IonItem>
				<IonCard color={stat==='Disliked'?'dark':''}>
					<IonCardHeader>
						<IonCardSubtitle>{props.genre}</IonCardSubtitle>
						<IonCardTitle>{props.title}</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						<ImageContainer>
							<IonImg src={props.image}/>
							<ImageIcon>
								<Heart color="pink" width={"48px"} height={"48px"}/>
							</ImageIcon>
							<IonCardHeader>
								<IonCardSubtitle>提案理由</IonCardSubtitle>
								<IonCardTitle>{props.reason}</IonCardTitle>
							</IonCardHeader>
						</ImageContainer>
					</IonCardContent>
				</IonCard>
			</IonItem>
		</IonItemSliding>
	);
}
