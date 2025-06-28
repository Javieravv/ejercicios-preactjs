// interface Tab {
//     id: string;
//     label: string;
//     content: string | JSX.Element;
//     isActive?: boolean;
// }

export const dataTabs = [
    {
        id: 'tab1',
        label: 'Tab 1',
        content: <p>Contenido de la pestaña 1</p>,
        isActive: true
    },
    {
        id: 'tab2',
        label: 'Tab 2',
        content: <p>Contenido de la pestaña 2</p>
    },
    {
        id: 'tab3',
        label: 'Tab 3',
        content: <button>Contenido de la pestaña 3</button>
    },
    {
        id: 'tab4',
        label: 'Tab 4',
        content: <>
        <div>
            <h2>Contenido de una nueva pestaña</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sit consequuntur odit soluta distinctio cupiditate, nam iusto neque asperiores eum maxime tenetur? In nostrum fugit explicabo sapiente officia obcaecati libero recusandae iure placeat sed est assumenda deleniti, labore at eius iusto exercitationem quidem illo voluptatem nulla. Consectetur odio nulla debitis laborum voluptatibus id velit soluta totam tempora facilis. Atque odio distinctio, voluptatibus voluptate eveniet, placeat nisi asperiores maxime natus doloribus quos dolorem aliquam officia tempora accusantium modi dolores voluptates laboriosam. Eos impedit nemo deserunt id, ut aliquam, provident dignissimos non soluta dolor fugit, repudiandae enim et? Fugit maiores nisi repellendus deleniti ab dolore nulla quis quas, natus commodi ipsa, eveniet accusamus dignissimos libero animi eius harum officiis magnam voluptatem, placeat quaerat sequi? Veritatis, repudiandae impedit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio magni vel!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quas nam reprehenderit, quibusdam magni illo mollitia consequatur quisquam porro qui molestias facilis veniam modi rerum eos cum est minus explicabo repudiandae recusandae, a, laboriosam reiciendis maiores cupiditate! Assumenda vero a sed officia. Perferendis inventore consequatur porro. A quibusdam, illum quos natus exercitationem in dolorum atque quis ut saepe commodi nemo reiciendis voluptatem, eius magnam unde nostrum, enim iusto quo voluptates aut minima. Quam culpa hic similique officiis esse, obcaecati porro cumque neque eligendi mollitia odio consequatur, consectetur, ullam totam ut facilis blanditiis. Vitae debitis numquam quia mollitia! Alias a perspiciatis architecto praesentium laborum at incidunt natus repellat fuga ratione, numquam nesciunt velit, tenetur dolorem officia atque aliquid quasi odit voluptate. Possimus doloremque dicta distinctio ad reprehenderit suscipit repellat est, earum, explicabo voluptates error accusantium.</p>
        </div>
        </>
    },
    {
        id: 'tab5',
        label: 'Tab 5',
        content: <p>Contenido de la pestaña 5</p>
    }
]