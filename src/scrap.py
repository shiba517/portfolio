FaDownload

{props.mySkills.context.map((knowledge) => (
                            <tr>
                                {knowledge.items.map((each) => (
                                    <td>{each}</td>
                                ))}
                            </tr>
                        ))}



if (props.mySkills.title == 'Bio' || props.mySkills.title == 'Education') {
        return (
            <p>{props.mySkills.context}</p>
        )
    }
    else {
        return (
            <Table>
                <thead>
                    <tr>
                        {props.mySkills.context.map((heading) => (
                            <th>{heading.headingName}</th>
                        ))}
                    </tr>
                    
                    
                    
                </thead>
            </Table>
        )
    }



    <tr>
                        <th>JavaScript</th>
                        <th>Python</th>
                        <th>HTML5</th>
                        <th>CSS3</th>
                        <th>SQL</th>
                    </tr>
                    <tr>
                        <th>MongoDB</th>
                        <th>Django</th>
                        <th>AWS</th>
                        <th>PySpark</th>
                        <th>Pig</th>
                        <th>MySQL</th>
                    </tr>
                    <tr>
                        <th>JQuery</th>
                        <th>React</th>
                        <th>Bootstrap</th>
                        <th>Materialize</th>
                        <th>Hadoop</th>                        
                        <th>Pandas</th>
                        <th>Streamlit</th>
                        <th>Boto3</th>
                    </tr>
                    <tr>
                        <th>Github</th>
                    </tr>