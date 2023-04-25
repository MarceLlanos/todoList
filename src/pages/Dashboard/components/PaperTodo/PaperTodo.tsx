import { CheckBoxOutlineBlank } from '@mui/icons-material';
import './PaperTodo.css';

export type PaperTodoProps = {};

const PaperTodo: React.FC<PaperTodoProps> = () => {
	return (
		<>
			<div className='taskContainer'>
				<CheckBoxOutlineBlank />
				<p>Build my first app with react.js</p>
				<p>personal</p>
				<span />
			</div>
		</>
	);
};

export default PaperTodo;
