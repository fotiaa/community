import React from 'react'
import { QuesAns } from '../../mocks/ques-ans'
import { Link } from 'react-router-dom'

const CardItems = () => {
  return (
    <div>
        {QuesAns.map((item) => {
            return (
                <>
                    <div key={item.id} className='flex justify-center'>
                        <div className='mt-4 mb-2'>
                            <div className='flex justify-center p-2'>{item.question}</div>
                            {/* Route it correctly */}
                            <Link to='/'>
                                <div className='flex justify-end p-2'>View Replies</div>
                            </Link>
                        </div>
                    </div>
                    <hr className='mx-auto border border-gray-600' style={{ width: '40%' }} />
                </>
            )
        })}
    </div>
  )
}

export default CardItems