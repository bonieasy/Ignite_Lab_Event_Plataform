import {CheckCircle, Lock} from 'phosphor-react'
import { isPast, format } from 'date-fns'
//import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from "classnames";

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{ slug: string}>()

    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' 'MMMM' • 'k'h'mm"
    // {
    //     locale: ptBR
    // }
    )

    const isActiveLesson = slug == props.slug;

    return(
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>

            <div className= {classNames('rounded border border-gray-500 p-4 mt-3 group-hover:border-green-500', {
                'bg-green-500': isActiveLesson,

            })}>
                <header className="flex itens-center justify-between">
                    {isLessonAvailable ? (
                        <span className={classNames('text-sm font-medium flex itens-center gap-2', {
                            'text-white': isActiveLesson,
                            'text-blue': !isActiveLesson,
                        })}>
                        <CheckCircle size={20} />
                        Content Released
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex itens-center gap-2">
                    <Lock size={20} />
                        Coming Soon
                    </span>
                    )
                    
                    }

                    <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
                        {props.type == 'live' ? 'LIVE' : 'HANDS-ON'}
                    </span>
                </header>
                <strong className={classNames('mt-5 block', {
                    'text-white': isActiveLesson,
                    'text-gray-200': !isActiveLesson,
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}