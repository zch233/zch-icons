// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DropboxCircleFilledSvg from 'icon-base/es/asn/DropboxCircleFilled';

export interface DropboxCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDropboxCircleFilled: DropboxCircleFilledIconType = (props, context) => (
    <Icon name='DropboxCircleFilled' {...{ ...props, ...context.attrs }} icon={DropboxCircleFilledSvg} />
);

IconDropboxCircleFilled.displayName = 'IconDropboxCircleFilled';

export default IconDropboxCircleFilled;
