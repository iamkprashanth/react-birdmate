const AddBird = ({handleSubmit, editid, bird, setBird}) => {
    return (
        <section className='addBird'>
          <form onSubmit={handleSubmit}>
            <input type="text" name="bird" value={bird} autoComplete="off" placeholder="add bird name" maxLength="25" onChange={(e) => setBird(e.target.value)}/>
            <button type="submit">{ editid ? "Update" : "Add"}</button>
          </form>
        </section>
    );
}

export default AddBird;