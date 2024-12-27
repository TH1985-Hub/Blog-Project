import { api } from './apis/api.js';

function createContainer(){
    const container = UI.createElement('div', {class: 'container-root w-100 d-flex jc-space-between ai-center fd-column'},[
        UI.createElement('header', {class: "header w-90 h-100px d-flex ai-center jc-space-between"}, [
           
               
                UI.createElement('h1', {class: 'title'}, 'Blog'),
                
            
            UI.createElement('nav', {class: "nav"}, [
                UI.createElement('a', {class: 'nav_list w-200px transition-5 td-none ', href: 'registration.html'}, 'Sign Up'),
                UI.createElement('a', {class: 'nav_list w-150px transition-5 td-none ', href: 'index.html'}, 'Log  In'),
                UI.createElement('a', {class: 'nav_list w-150px transition-5 td-none ', href: 'create-page.html'}, 'Create Blog'),
            ])  
        ]),
           
        
        
        UI.createElement('main', {class: 'main-container w-90 h-80 d-flex jc-space-between overflow'},[
            UI.createElement('div', {class: 'sidebar w-400px h-auto d-flex fd-column jc-space-between ai-center ta-center overflow'},[
                UI.createElement('h2', {class: 'sidebar_title'}, 'Bloggers'),
                    UI.createElement('div', { class: 'bloggers_list w-90 h-80 d-flex fd-column jc-space-between ai-center overflow' }, 
                        bloggers.map(blogger => 
                            UI.createElement('div', { class: 'blogger w-90 h-150px d-flex jc-space-between ai-center ta-centre' }, [
                                UI.createElement('img', { src: blogger.avatar, alt: `${blogger.firstName} ${blogger.lastName}`, class: 'blogger_avatar w-100px h-100px transition-7' }),
                                UI.createElement('p', {class: 'blogger_name'}, `${blogger.firstName} ${blogger.lastName}`)
                            ])
                        )
                    )
            ]),
            UI.createElement('section', {class: 'section w-70 h-100 d-flex jc-space-between ai-center fd-column '}, [
                UI.createElement('div', {class: 'section_block w-100 h-90 d-flex jc-space-center  ai-center ta-centre overflow'}, [
                    UI.createElement('div', { class: 'section_block_posts w-90  h-100 d-flex jc-space-around ai-center fd-column overflow' }, 
                        posts.map(post => 
                            UI.createElement('div', { class: 'post_card w-100 ' }, [
                                UI.createElement('div', {class: 'post_card_boxPostTitle d-flex jc-space-between ai-center '},[
                                    UI.createElement('p', { class: 'post_card_author' }, `By: ${post.authorName}`),
                                    UI.createElement('h4', { class: 'post_card_title' }, post.title),
                                ]),
                                UI.createElement('div', {class: 'post_card_description  d-flex jc-space-between ai-center ta-center'},[
                                    UI.createElement('img', { src: post.img, alt: post.title, class: 'post_image w-300px h-200px transition-7' }),
                                    UI.createElement('div', {class: 'box_post_story w-400px'}, [
                                        UI.createElement('p', { class: 'post_story' }, post.story)
                                    ])
                                    
                                ])
                                
                            ])
                        )
                    )
                ]),
                UI.createElement('footer', {class: 'footer w-100 h-8 d-flex jc-space-around ai-center'},[
                    UI.createElement('div', {class: 'footer_info h-80'}, [
                        UI.createElement('p', {class: 'footer_info_email'}, `Email : ${footerData.email}`),
                        UI.createElement('p', {class: 'footer_info_number'}, `Phone: ${footerData.number}`)
                    ]),
                    UI.createElement('div', {class: 'social-media w-100px h-40px display-flex jc-space-between'}, [
                        UI.createElement('a', {href: footerData.socialMedia.facebook, class: 'fa-brands fa-facebook td-none socialMedia_icon'}),
                        UI.createElement('a', {href: footerData.socialMedia.instagram, class: 'fa-brands fa-instagram td-none socialMedia_icon'})
                      
                    ])
                ])
            ])

        ])
        ]);
        
    
    

    UI.render(container, 'body');

}

createContainer();