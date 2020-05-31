import React from 'react'
import Markdown from 'markdown-to-jsx'
import './readme.scss'
import { FadeLoader } from 'react-spinners'

const Readme = (props) => {
  if (!props.readme) {
    return (
      <div className="flex  ml-50 h-screen">
        <div className="m-auto">
          <FadeLoader size={50} color="gray" />
        </div>
      </div>
    )
  }
  return <Markdown className="markdown-body">{props.readme}</Markdown>
}
Readme.propTypes = {}

export default React.memo(Readme)
