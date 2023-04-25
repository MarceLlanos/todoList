import './LabelProject.css';

export type LabelProjectProps = {
	color: string;
	label: string;
};

const LabelProject: React.FC<LabelProjectProps> = ({ color, label }) => {
	return (
		<>
			<span className={`color ${color}`} /> {label}
		</>
	);
};

export default LabelProject;
