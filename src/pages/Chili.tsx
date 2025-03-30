declare global {
	namespace JSX {
		interface IntrinsicElements {
			"model-viewer": any;
		}
	}
}

("use client");

import { useState } from "react";
import "@google/model-viewer";

export default function Modelisation() {
	const [activeTab] = useState("texte1");

	return (
		<div className="flex min-h-screen w-full items-center justify-center bg-white p-8">
			<div className="flex w-full max-w-[1920px] flex-col md:flex-row items-start justify-between gap-8 md:gap-36 lg:gap-48 xl:gap-64">
				{/* Section gauche - plus d'espace pour le modèle 3D */}
				<div className="w-full md:w-1/2 lg:w-1/3">
					{" "}
					{/* Augmente la taille */}
					<div className="flex flex-col items-start mb-6">
						<h1 className="text-3xl font-bold uppercase tracking-wide font-neutral-face">
                        Les Moaï
						</h1>
						<p className="text-bg text-gray-600 font-abc-sans">
							Faites tourner l'objet
						</p>
					</div>
					{/* Modèle 3D - Sans aspect-square */}
					<div className="w-full h-[600px] bg-gray-100 rounded-md flex items-center justify-center">
						<model-viewer
							src="/models/moai.glb"
							alt="Calebasse mandingue"
							camera-controls
							auto-rotate
							ar
							shadow-intensity="1"
							className="w-full h-full"
							camera-orbit="auto auto 2m"
							min-camera-orbit="auto auto 150%"
							max-camera-orbit="auto auto 300%"
						></model-viewer>
					</div>
				</div>

				{/* Section droite - déplacée plus à droite */}
				<div className="w-full md:w-1/2 lg:w-7/12 xl:w-1/2">
					<div className="rounded-2xl bg-white p-8 md:p-10 shadow-md h-[500px] flex flex-col">
						<h2 className="mb-6 text-2xl font-bold uppercase font-neutral-face">
                        Le mystère des Moaï, les statues les plus célèbres du monde
						</h2>

						{/* Contenu des onglets avec défilement */}
						<div
							className="max-h-100 overflow-y-auto p-12
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-gray-300"
						>
							{activeTab === "texte1" && (
								<div className="text-base md:text-lg leading-relaxed text-gray-700 font-abc-sans">
									<h3 className="mb-4 text-xl font-bold font-neutral-face">
                                    Elles sont omniprésentes, dans les films, les séries et même dans les jeux vidéos…ces statues attirent la curiosité de ceux qui l'observent, cache une histoire intrigante et remplie de théories. Dans la langue locale , les Moï Aringa Ora sont des statues signifiant « visage vivant des ancêtres », elles appartiennent à la population Rapa Nui, de l’île de Pâques, située dans l’océan pacifique à 3000 kilomètres du Chili.
									</h3>
									<p className="mb-4">
                                    Les moai conservent et canalisent le Mana, une force spirituelle essentielle associée au roi, afin de protéger la descendance et le territoire.  Créés à partir du XIIIe siècle, les Moai sont fabriqués à partir des roches du volcan Rano Raraku. Afin de façonner ses roches, les Rapa Nui les ont sculptées à partir de basaltes, des pierres robustes et précises.
									</p>
									
									<p className="mb-4">
                                    La hauteur de ses statuts mesurent 2 mètres, pouvant aller jusqu’à 22 mètres de haut. Elles pèsent en moyenne 10 tonnes, mais la plus grande statue pèse 200 tonnes.  Il y a encore de nombreux mystères inexpliqués sur les Moai, et si nous prenons un billet d’avion pour de l'île de Pâques ?
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
