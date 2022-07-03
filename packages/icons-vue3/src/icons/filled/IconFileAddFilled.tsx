// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileAddFilledSvg from 'icons-base/es/asn/FileAddFilled';

export interface FileAddFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileAddFilled: FileAddFilledIconType = (props, context) => <Icon name='FileAddFilled' {...{ ...props, ...context.attrs }} icon={FileAddFilledSvg} />;

IconFileAddFilled.displayName = 'IconFileAddFilled';
IconFileAddFilled.theme = 'filled';
IconFileAddFilled.originName = 'file-add';

export default IconFileAddFilled;
