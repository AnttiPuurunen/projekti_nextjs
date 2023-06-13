import RoadDetailsById from '@/components/RoadDetailsById';

const IdRoadDetails = ( props ) => {

    return (
        <div>
            <RoadDetailsById 
            id={props.params.id} />
        </div>
    )
}

export async function getServerSideProps(context) {
    console.log(context.query);
    return {
      props: {}, // will be passed to the page component as props
    }
  }

export default IdRoadDetails