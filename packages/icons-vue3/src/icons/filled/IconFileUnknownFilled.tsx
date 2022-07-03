// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileUnknownFilledSvg from 'icons-base/es/asn/FileUnknownFilled';

export interface FileUnknownFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileUnknownFilled: FileUnknownFilledIconType = (props, context) => (
    <Icon name='FileUnknownFilled' {...{ ...props, ...context.attrs }} icon={FileUnknownFilledSvg} />
);

IconFileUnknownFilled.displayName = 'IconFileUnknownFilled';
IconFileUnknownFilled.theme = 'filled';
IconFileUnknownFilled.originName = 'file-unknown';

export default IconFileUnknownFilled;
