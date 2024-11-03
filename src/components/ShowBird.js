const ShowBird = ({birdlist, setBirdlist, handleEdit, handleDelete}) => {
    return (
        <section className='showBird'>
            <p className="head">
                <span>
                    <span className="title">Todo</span>
                    <span className="count">{birdlist.length}</span>
                </span>
                <span className="clearAll" onClick={() => setBirdlist([])}>Clear All</span>
            </p>
            <ul>
                {birdlist.map((bird) => (
                    <li key={bird.id}>
                        <p>
                            <span className="name">{bird.name}</span>
                            <span className="time">{bird.time}</span>
                        </p>                
                        <i className="bi bi-pencil-square" onClick={() => handleEdit(bird.id)}></i>
                        <i className="bi bi-trash" onClick={() => handleDelete(bird.id)}></i>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ShowBird;