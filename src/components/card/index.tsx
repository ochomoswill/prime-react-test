import CardImage from "../../card-image.png";
import {Button} from "primereact/button";
import {Card} from "primereact/card";
import React from "react";

export function PrimeReactCard(props: {}) {
    const header = <img alt="Card" src={CardImage}/>;
    const footer = <span>
        <Button label="Save" icon="pi pi-check" style={{marginRight: '.25em'}}/>
        <Button label="Cancel" icon="pi pi-times" className="p-button-secondary"/>
    </span>;

    return (
        <Card title="Advanced Card" subTitle="Subtitle" style={{width: "25em"}} footer={footer}
              header={header}>
            <p className="p-m-0" style={{lineHeight: "1.5"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                neque quas!</p>
        </Card>
    )
        ;
}