import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Dropdown } from 'react-bootstrap'
import cn from 'classnames'
import { actions as channelsActions } from '../../slices/channelsSlice.js'
import { actions as modalsActions } from '../../slices/modalsSlice.js'

const Channels = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const channelsState = useSelector(state => state.channels.channels)
  const openChannel = useSelector(state => state.channels.openChannel)

  const channelClasses = channel => cn('w-100 rounded-0 text-start text-truncate btn', {
    'btn-secondary': channel.id === openChannel.id,
  })

  return (
    <ul id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
      {channelsState.map(channel => (
        <li key={channel.id} className="nav-item w-100">
          <Dropdown role="group" className="d-flex dropdown btn-group">
            <button
              type="button"
              className={channelClasses(channel)}
              onClick={() => dispatch(channelsActions.setOpenChannel(channel))}
            >
              <span className="me-1">#</span>
              {channel.name}
            </button>
            {channel.removable && (
              <>
                <Dropdown.Toggle
                  split
                  variant={channel.id === openChannel.id ? 'secondary' : ''}
                  className="flex-grow-0 dropdown-toggle-split"
                >
                  <span className="visually-hidden">{t('chat.channelMenu.dropdownEl')}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => dispatch(modalsActions.openModal({ type: 'removing', item: channel }))}>
                    {t('chat.channelMenu.removeBtn')}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => dispatch(modalsActions.openModal({ type: 'renaming', item: channel }))}>
                    {t('chat.channelMenu.renameBtn')}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </>
            )}
          </Dropdown>
        </li>
      ))}
    </ul>
  )
}

export default Channels
