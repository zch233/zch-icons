// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DropboxOutlinedSvg from 'gupo-icons-base/es/asn/DropboxOutlined';

export interface DropboxOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDropboxOutlined: DropboxOutlinedIconType = (props, context) => (
    <Icon name='DropboxOutlined' {...{ ...props, ...context.attrs }} icon={DropboxOutlinedSvg} />
);

IconDropboxOutlined.displayName = 'IconDropboxOutlined';
IconDropboxOutlined.theme = 'outlined';
IconDropboxOutlined.originName = 'dropbox';

export default IconDropboxOutlined;
