import {Bars3Icon} from '@heroicons/react/24/outline/esm'

export const Navbar = ():JSX.Element  => {
    return (
        <div className='w-screen h-[80px] z-10 fixed drop-shadow-lg bg-zinc-200'>
            <Bars3Icon className='w-5' />
        </div>
    )
}

