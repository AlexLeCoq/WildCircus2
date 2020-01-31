import Pictures from './Pictures'

const PictureViewer = props => (
    <div className="picture-container">
        <Picture
            key={props.path}
            path={props.path}
            img={button.img} {/* INSERER LIEN IMG */}
            txt={button.txt} {/* INSERER TEXTE IMG */}
        />
    </div>
);

export default PictureViewer;

