import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from './Select.module.css'


type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

type ItemType = {
    title: string,
    value: any
}


export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoverElementValue, setHoverElementValue] = useState(props.value)

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoverElementValue)


    const toggleItems = () => setActive(!active)

    useEffect(() => {
        setHoverElementValue(props.value);
    }, [props.value])


    const onClickHandler = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoverElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }

        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }

    }


    return (
        <div className={styles.select + ' ' + (active ? styles.active : '')} onKeyUp={onKeyUp}
             tabIndex={0}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map(el => <div
                        onMouseEnter={() => {
                            setHoverElementValue(el.value)
                        }}
                        className={styles.item + ' ' + (hoveredItem === el ? styles.selected : '')}
                        key={el.value}
                        onClick={() => onClickHandler(el.value)}
                    >{el.title}</div>)}
                </div>
            }
        </div>
    )
}
