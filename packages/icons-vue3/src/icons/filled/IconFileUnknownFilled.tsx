// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileUnknownFilledSvg from 'icon-base/es/asn/FileUnknownFilled';

export interface FileUnknownFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileUnknownFilled: FileUnknownFilledIconType = (props, context) => (
    <Icon name='FileUnknownFilled' {...{ ...props, ...context.attrs }} icon={FileUnknownFilledSvg} />
);

IconFileUnknownFilled.displayName = 'IconFileUnknownFilled';

export default IconFileUnknownFilled;
