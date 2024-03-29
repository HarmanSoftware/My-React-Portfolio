import React from 'react'
import Tippy from '@tippyjs/react';
import {Link} from 'react-router-dom'
import '../Assets/DarkMode.css';

export default function Footer() {
  return (
    <div>
        <footer className="px-4 divide-y dark:bg-purple dark:text-white" id="footer">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<Link rel="noopener noreferrer" to="/" className="flex justify-center space-x-3 lg:justify-start">
				<span className="self-center text-2xl font-semibold">{"{ HM }"}</span>
			</Link>
			<div className='text-justify pr-10 py-4'>
			  Self-motivated, optimistic, and responsible person, Motivated Software engineer and i enjoy building web applications, with interactive design and learning new things in order to deliver better quality products.
			</div>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase text-lg font-medium dark:text-gray-50 p-1">Navigation</h3>
				<ul className="space-y-1 text-base">
					<li>
						<Link className='hover:bg-mauve hover:text-black p-1 rounded-sm' rel="noopener noreferrer" to="/">Home</Link>
					</li>
					<li>
						<Link className='hover:bg-mauve hover:text-black p-1 rounded-sm' rel="noopener noreferrer" to="/experience"> Education & Experience</Link>
					</li>
                    <li>
						<Link className='hover:bg-mauve hover:text-black p-1 rounded-sm'  rel="noopener noreferrer" to="/projects">Project & Certification</Link>
					</li>
                    <li>
						<Link className='hover:bg-mauve hover:text-black p-1 rounded-sm' rel="noopener noreferrer" to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
			<div className="space-y-3 text-base">
				<h3 className="uppercase text-lg font-medium dark:text-gray-50 p-1">Top Projects</h3>
				<ul className="space-y-1">
					<li>
						<a className='hover:bg-mauve hover:text-black p-1 rounded-sm' rel="noopener noreferrer" href="https://gagromed.com" target="_blank">Gagromed.com</a>
					</li>
					<li>
						<a className='hover:bg-mauve hover:text-black p-1 rounded-sm' rel="noopener noreferrer" href="https://himarketing.agency/" target="_blank">Himarketing.agency</a>
					</li>
					<li>
						<a className='hover:bg-mauve hover:text-black p-1 rounded-sm' rel="noopener noreferrer" href="https://strong-zeal.com/" target="_blank">strong-zeal.com</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3 text-base">
				<div className="uppercase text-lg font-medium dark:text-gray-50">Follow Me</div>
				<div className="flex justify-start space-x-3">
					
						<Tippy content='Facebook'>
					<a href="https://www.facebook.com/harmanmuhammad99" target='_blank' rel="noreferrer" className="flex items-center p-1 scale-125 hover:scale-150 hover:transition-all">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
							<path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
						</svg>
					</a>
						</Tippy>

						<Tippy content='Linkedin'>
					<a rel="noopener noreferrer" href='https://www.linkedin.com/in/harmanmuhammad/' target='_blank' className="flex items-center p-1 scale:75 hover:scale-125 hover:transition-all">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='white' viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
					</a>
						</Tippy>

						<Tippy content='Instagram'>
					<a rel="noopener noreferrer" href="https://www.instagram.com/harmanmuhammad99/" target="_blank" className="flex items-center p-1 scale-125 hover:scale-150 hover:transition-all">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
							<path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
						</svg>
					</a>
						</Tippy>
				</div>
			</div>
		</div>
	</div>
	<div className="py-6 text-lg font-semibold text-center dark:text-gray-300 inset-96"> <span className='px-4'>Eat</span> <span className='px-4'>Code</span> <span className='px-4'>Sleep</span> <span className='px-4'>Repeat</span></div>
</footer>
    </div>
  )
}